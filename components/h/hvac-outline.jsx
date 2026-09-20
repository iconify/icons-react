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
		"content": `<style>.tg-4vv13e {
  fill: currentColor;
  d: path("M16.25 16.25Q18 14.5 18 12t-1.75-4.25T12 6T7.75 7.75T6 12t1.75 4.25T12 18t4.25-1.75m-5.65-.513q-.675-.262-1.225-.737h5.25q-.55.475-1.225.738T12 16t-1.4-.262M8.55 14q-.2-.35-.325-.725T8.05 12.5h7.9q-.05.4-.175.775T15.45 14zm-.5-2.5q.05-.4.175-.775T8.55 10h6.9q.2.35.325.725t.175.775zM9.375 9q.55-.475 1.225-.737T12 8t1.4.262T14.625 9zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z");
}
</style><path class="tg-4vv13e"/>`,
		"fallback": "material-symbols:hvac-outline",
	});
}

export default Component;
