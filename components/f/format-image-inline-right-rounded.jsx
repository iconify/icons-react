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
		"content": `<style>.akfrrvbkg {
  fill: currentColor;
  d: path("M11 16V8q0-.425.288-.712T12 7h8q.425 0 .713.288T21 8v8q0 .425-.288.713T20 17h-8q-.425 0-.712-.288T11 16m-7 1q-.425 0-.712-.288T3 16t.288-.712T4 15h4q.425 0 .713.288T9 16t-.288.713T8 17zm0 4q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21zM4 5q-.425 0-.712-.288T3 4t.288-.712T4 3h16q.425 0 .713.288T21 4t-.288.713T20 5z");
}
</style><path class="akfrrvbkg"/>`,
		"fallback": "material-symbols:format-image-inline-right-rounded",
	});
}

export default Component;
