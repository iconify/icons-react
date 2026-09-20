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
		"content": `<style>.fats32ysu {
  fill: currentColor;
  d: path("M4 5q-.425 0-.712-.288T3 4t.288-.712T4 3h16q.425 0 .713.288T21 4t-.288.713T20 5zm6 4q-.425 0-.712-.288T9 8t.288-.712T10 7h10q.425 0 .713.288T21 8t-.288.713T20 9zm-6 4q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm6 4q-.425 0-.712-.288T9 16t.288-.712T10 15h10q.425 0 .713.288T21 16t-.288.713T20 17zm-6 4q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21z");
}
</style><path class="fats32ysu"/>`,
		"fallback": "material-symbols:format-align-right-outline-rounded",
	});
}

export default Component;
