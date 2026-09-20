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
		"content": `<style>.adipr5bwe {
  fill: currentColor;
  d: path("M6.308 17.692h5.038v-3.538H6.308zm0-4.846h5.038V6.308H6.308zm6.346 4.846h5.038v-6.538h-5.038zm0-7.846h5.038V6.308h-5.038zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v2.153h1.539v1H20V11.5h1.539v1H20v2.73h1.539v1H20v2.155q0 .69-.462 1.152T18.384 20z");
}
</style><path class="adipr5bwe"/>`,
		"fallback": "material-symbols-light:empty-dashboard",
	});
}

export default Component;
