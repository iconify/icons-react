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
		"content": `<style>.y8od-cb3z {
  fill: currentColor;
  d: path("M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21zm8-4q-.425 0-.712-.288T11 16t.288-.712T12 15h8q.425 0 .713.288T21 16t-.288.713T20 17zm0-4q-.425 0-.712-.288T11 12t.288-.712T12 11h8q.425 0 .713.288T21 12t-.288.713T20 13zm0-4q-.425 0-.712-.288T11 8t.288-.712T12 7h8q.425 0 .713.288T21 8t-.288.713T20 9zM4 5q-.425 0-.712-.288T3 4t.288-.712T4 3h16q.425 0 .713.288T21 4t-.288.713T20 5zm-.15 10.15q-.25.25-.55.125T3 14.8V9.2q0-.35.3-.475t.55.125l2.8 2.8q.15.15.15.35t-.15.35z");
}
</style><path class="y8od-cb3z"/>`,
		"fallback": "material-symbols:format-indent-increase-outline-rounded",
	});
}

export default Component;
