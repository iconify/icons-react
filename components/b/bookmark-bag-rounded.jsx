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
		"content": `<style>.t12afwb-k {
  fill: currentColor;
  d: path("M11.288 14.788q.212-.213.212-.538V14h1v.25q0 .325.213.538t.537.212t.538-.213t.212-.537V14q.425 0 .713-.288T15 13V9q0-.425-.288-.712T14 8h-.5V7q0-.425-.288-.712T12.5 6h-1q-.425 0-.712.288T10.5 7v1H10q-.425 0-.712.288T9 9v4q0 .425.288.713T10 14v.25q0 .325.213.538t.537.212t.538-.213M11.5 8V7h1v1zm.5 10l-4.2 1.8q-1 .425-1.9-.162T5 17.975V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v12.975q0 1.075-.9 1.663t-1.9.162z");
}
</style><path class="t12afwb-k"/>`,
		"fallback": "material-symbols:bookmark-bag-rounded",
	});
}

export default Component;
