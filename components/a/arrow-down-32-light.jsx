import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a6n029bac {
  fill: currentColor;
  d: path("M16.5 3.5a.5.5 0 0 0-1 0v23.833l-9.655-9.195a.5.5 0 0 0-.69.724l10.5 10a.5.5 0 0 0 .69 0l10.5-10a.5.5 0 0 0-.69-.724L16.5 27.333z");
}
</style><path class="a6n029bac"/>`,
		"fallback": "fluent:arrow-down-32-light",
	});
}

export default Component;
