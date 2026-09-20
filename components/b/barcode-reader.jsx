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
		"content": `<style>.w__c7nxtu {
  fill: currentColor;
  d: path("M6 21q-1.5 0-2.387-1.162T3.1 17.25l1.8-6.8q-.825-.525-1.362-1.425T3 7q0-1.65 1.175-2.825T7 3h8q1.125 0 1.7.95t.075 1.95l-2 4q-.275.5-.738.8T13 11h-2.025l-.275 1h.3q.425 0 .713.288T12 13v2q0 .425-.288.713T11 16H9.65l-.75 2.8q-.275.975-1.075 1.588T6 21M19 5l-.625-1.35L22 2l.6 1.375zm3 7l-3.625-1.625L19 9l3.6 1.65zm-3-4.25v-1.5h4v1.5z");
}
</style><path class="w__c7nxtu"/>`,
		"fallback": "material-symbols:barcode-reader",
	});
}

export default Component;
