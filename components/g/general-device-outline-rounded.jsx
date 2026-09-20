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
		"content": `<style>.xjpdmtbby {
  fill: currentColor;
  d: path("M9 18q-.425 0-.712-.288T8 17V5q0-.825.588-1.412T10 3h4q.825 0 1.413.588T16 5v12q0 .425-.288.713T15 18zm1-2h4V5h-4zm-1 3h6q.425 0 .713.288T16 20t-.288.713T15 21H9q-.425 0-.712-.288T8 20t.288-.712T9 19m1-3h4z");
}
</style><path class="xjpdmtbby"/>`,
		"fallback": "material-symbols:general-device-outline-rounded",
	});
}

export default Component;
