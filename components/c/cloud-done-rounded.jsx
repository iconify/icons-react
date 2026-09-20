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
		"content": `<style>.k5l-dybtg {
  fill: currentColor;
  d: path("M10.344 14.875L8.56 13.091q-.147-.147-.345-.156t-.363.155q-.165.166-.165.357q0 .192.165.357l1.933 1.938q.242.243.565.243t.566-.243l4.032-4.032q.146-.146.156-.35t-.156-.37t-.36-.165t-.36.166zM6.5 19q-1.871 0-3.185-1.306Q2 16.39 2 14.517q0-1.719 1.175-3.051t2.921-1.431q.337-2.185 2.01-3.61T12 5q2.502 0 4.251 1.749T18 11v1h.616q1.436.046 2.41 1.055T22 15.5q0 1.471-1.014 2.486Q19.97 19 18.5 19z");
}
</style><path class="k5l-dybtg"/>`,
		"fallback": "material-symbols-light:cloud-done-rounded",
	});
}

export default Component;
