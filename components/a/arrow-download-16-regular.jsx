import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rt89phw3o {
  fill: currentColor;
  d: path("M3.5 13h9a.5.5 0 0 1 .09.992L12.5 14h-9a.5.5 0 0 1-.09-.992zh9zM7.91 1.008L8 1a.5.5 0 0 1 .492.41l.008.09v8.792l2.682-2.681a.5.5 0 0 1 .638-.058l.07.058a.5.5 0 0 1 .057.638l-.058.069l-3.535 3.536a.5.5 0 0 1-.638.057l-.07-.057l-3.535-3.536a.5.5 0 0 1 .638-.765l.069.058L7.5 10.292V1.5a.5.5 0 0 1 .41-.492L8 1z");
}
</style><path class="rt89phw3o"/>`,
		"fallback": "fluent:arrow-download-16-regular",
	});
}

export default Component;
