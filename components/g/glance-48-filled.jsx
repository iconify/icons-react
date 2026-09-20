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
		"content": `<style>.fzvtz1usz {
  fill: currentColor;
  d: path("M10.25 6A4.25 4.25 0 0 0 6 10.25v11.5A4.25 4.25 0 0 0 10.25 26h7.5A4.25 4.25 0 0 0 22 21.75v-11.5A4.25 4.25 0 0 0 17.75 6zM6 34.25A4.25 4.25 0 0 1 10.25 30h7.5A4.25 4.25 0 0 1 22 34.25v3.5A4.25 4.25 0 0 1 17.75 42h-7.5A4.25 4.25 0 0 1 6 37.75zm20-24A4.25 4.25 0 0 1 30.25 6h7.5A4.25 4.25 0 0 1 42 10.25v3.5A4.25 4.25 0 0 1 37.75 18h-7.5A4.25 4.25 0 0 1 26 13.75zm0 16A4.25 4.25 0 0 1 30.25 22h7.5A4.25 4.25 0 0 1 42 26.25v11.5A4.25 4.25 0 0 1 37.75 42h-7.5A4.25 4.25 0 0 1 26 37.75z");
}
</style><path class="fzvtz1usz"/>`,
		"fallback": "fluent:glance-48-filled",
	});
}

export default Component;
