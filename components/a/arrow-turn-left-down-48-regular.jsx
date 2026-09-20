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
		"content": `<style>.ev0kstb0b {
  fill: currentColor;
  d: path("M40.75 12.5a1.25 1.25 0 1 0 0-2.5h-18.5A7.25 7.25 0 0 0 15 17.25v18.168l-6.854-7.04a1.25 1.25 0 0 0-1.792 1.744l9.25 9.5a1.25 1.25 0 0 0 1.792 0l9.25-9.5a1.25 1.25 0 0 0-1.792-1.744L17.5 35.931V17.25a4.75 4.75 0 0 1 4.75-4.75z");
}
</style><path class="ev0kstb0b"/>`,
		"fallback": "fluent:arrow-turn-left-down-48-regular",
	});
}

export default Component;
