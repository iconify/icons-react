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
		"content": `<style>.awsq1zbxp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C18.0751 1 23 5.9249 23 12C23 18.0751 18.0751 23 12 23C5.9249 23 1 18.0751 1 12C1 5.9249 5.9249 1 12 1ZM10.882 6.9042L11.593 11.5685L13.5701 11.2671L12.8591 6.6028ZM14.8363 6.3014L15.5473 10.9657L17.5244 10.6643L16.8134 6Z");
}
</style><path clip-rule="evenodd" class="awsq1zbxp"/>`,
		"fallback": "keyline-icons:bot-2-sharp-fill",
	});
}

export default Component;
