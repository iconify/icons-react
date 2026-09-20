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
		"content": `<style>.bxg18jmap {
  fill: currentColor;
  d: path("M19.775 22.625L15.05 17.9L13 20H4.75l-2.125-2.125q-.575-.575-.587-1.425T2.6 15l4.7-4.85l-5.925-5.925L2.8 2.8l18.4 18.4zM5.6 18h6.55l1.475-1.525L8.7 11.55L4 16.4zm12.275-2.975L16.45 13.6L20 9.95L15.05 5L11.5 8.65l-1.4-1.4l3.5-3.65q.575-.6 1.413-.6t1.412.575L21.4 8.55q.575.575.575 1.425T21.4 11.4zM11.175 14");
}
</style><path class="bxg18jmap"/>`,
		"fallback": "material-symbols:ink-eraser-off-outline",
	});
}

export default Component;
