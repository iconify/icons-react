import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g6zr1cb2u {
  fill: currentColor;
  d: path("M15.206 20.858q-.237.236-.541.357t-.61.121t-.601-.12q-.298-.122-.535-.358l-1.246-1.227q-.236-.237-.345-.526t-.114-.582t.106-.584t.319-.535l.265-.296l-8.15-11.65L7 2.212l12.283 12.282q.236.237.357.542t.121.608t-.12.602q-.122.298-.358.535zm-1.554-.714q.192.173.442.173t.423-.173l4.052-4.052q.173-.173.173-.423t-.173-.442L16.9 13.514l-4.52 4.519q-.191.192-.191.451q0 .26.192.433z");
}
</style><path class="g6zr1cb2u"/>`,
		"fallback": "material-symbols-light:carpenter",
	});
}

export default Component;
