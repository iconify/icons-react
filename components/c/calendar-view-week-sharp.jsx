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
		"content": `<style>.ccll7pbow {
  fill: currentColor;
  d: path("M12.75 19V5h3.375v14zm-4.875 0V5h3.375v14zM3 19V5h3.375v14zm14.625 0V5H21v14z");
}
</style><path class="ccll7pbow"/>`,
		"fallback": "material-symbols:calendar-view-week-sharp",
	});
}

export default Component;
