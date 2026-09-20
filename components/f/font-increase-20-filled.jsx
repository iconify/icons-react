import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bq20qjjid {
  fill: currentColor;
  d: path("M14.238 4.82a.75.75 0 0 1-.976-1.14l1.75-1.5a.75.75 0 0 1 .976 0l1.75 1.5a.75.75 0 1 1-.976 1.14L15.5 3.737zM10 3.75a.75.75 0 0 0-.694.466l-4.5 11a.75.75 0 0 0 1.388.568L7.64 12.25h4.72l1.446 3.534a.75.75 0 1 0 1.388-.568l-4.5-11A.75.75 0 0 0 10 3.75m0 2.73l1.746 4.27H8.255z");
}
</style><path class="bq20qjjid"/>`,
		"fallback": "fluent:font-increase-20-filled",
	});
}

export default Component;
