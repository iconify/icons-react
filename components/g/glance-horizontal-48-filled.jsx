import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bgsi04bfy {
  fill: currentColor;
  d: path("M6 10.25A4.25 4.25 0 0 1 10.25 6h11.5A4.25 4.25 0 0 1 26 10.25v7.5A4.25 4.25 0 0 1 21.75 22h-11.5A4.25 4.25 0 0 1 6 17.75zM34.25 6A4.25 4.25 0 0 0 30 10.25v7.5A4.25 4.25 0 0 0 34.25 22h3.5A4.25 4.25 0 0 0 42 17.75v-7.5A4.25 4.25 0 0 0 37.75 6zm-24 20A4.25 4.25 0 0 0 6 30.25v7.5A4.25 4.25 0 0 0 10.25 42h3.5A4.25 4.25 0 0 0 18 37.75v-7.5A4.25 4.25 0 0 0 13.75 26zm16 0A4.25 4.25 0 0 0 22 30.25v7.5A4.25 4.25 0 0 0 26.25 42h11.5A4.25 4.25 0 0 0 42 37.75v-7.5A4.25 4.25 0 0 0 37.75 26z");
}
</style><path class="bgsi04bfy"/>`,
		"fallback": "fluent:glance-horizontal-48-filled",
	});
}

export default Component;
