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
		"content": `<style>.aini8acdc {
  fill: currentColor;
  d: path("M12.25 2.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M7 3a2.5 2.5 0 0 0-2.5 2.5a2 2 0 0 0 2 2A1.5 1.5 0 0 0 8 6a1 1 0 0 0-1-1a.5.5 0 0 0 0 1a.5.5 0 0 1-.5.5a1 1 0 0 1-1-1A1.5 1.5 0 0 1 7 4a2 2 0 0 1 2 2a2.5 2.5 0 0 1-2.5 2.5a.5.5 0 0 0 0 1A3.5 3.5 0 0 0 10 6a3 3 0 0 0-3-3M4 8.5a.5.5 0 0 0-.724-.447l-2 1a.5.5 0 1 0 .447.894l1.276-.638V12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V9.309l1.276.638a.5.5 0 1 0 .448-.894l-2-1a.5.5 0 0 0-.724.447V12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10-4a.5.5 0 1 0-1 0V5h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V6h.5a.5.5 0 1 0 0-1H14z");
}
</style><path class="aini8acdc"/>`,
		"fallback": "fluent:gift-open-16-regular",
	});
}

export default Component;
