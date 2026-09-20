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
		"content": `<style>.i71lcdbuy {
  fill: currentColor;
  d: path("M11 13.25V11h3.5q.3 0 .45-.275t-.05-.525L14 9l.9-1.2q.2-.25.05-.525T14.5 7h-4q-.425 0-.712.288T9.5 8v5.25q0 .325.213.538t.537.212t.538-.213t.212-.537M12 18l-4.2 1.8q-1 .425-1.9-.162T5 17.975V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v12.975q0 1.075-.9 1.663t-1.9.162z");
}
</style><path class="i71lcdbuy"/>`,
		"fallback": "material-symbols:bookmark-flag-rounded",
	});
}

export default Component;
