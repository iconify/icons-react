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
		"content": `<style>.nbjhztbyf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM9.08301 6.10254C8.09119 5.71039 7.00014 6.45591 7 7.53809V16.4619C7.00015 17.6161 8.24116 18.3871 9.2793 17.8037L17.2168 13.3418C18.2611 12.7548 18.2611 11.2452 17.2168 10.6582L9.2793 6.19629L9.08301 6.10254Z");
}
</style><path clip-rule="evenodd" class="nbjhztbyf"/>`,
		"fallback": "keyline-icons:circle-caret-right-fill",
	});
}

export default Component;
