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
		"content": `<style>.q1myuwbqm {
  fill: currentColor;
  d: path("m19.075 21.9l-17-16.975q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l17 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3M16.25 13q-.425 0-.725-.288t-.3-.712q0-.4.288-.7t.737-.3H17q.425 0 .713.288T18 12t-.288.713T17 13zm-5-5q-.425 0-.725-.288t-.3-.712q0-.4.288-.7t.737-.3H20q.425 0 .713.288T21 7t-.288.713T20 8zM11 18q-.425 0-.712-.288T10 17t.288-.712T11 16h2q.425 0 .713.288T14 17t-.288.713T13 18zm-4-5q-.425 0-.712-.288T6 12t.288-.712T7 11h3.15v2zM4 8q-.425 0-.712-.288T3 7t.288-.712T4 6h1.15v2z");
}
</style><path class="q1myuwbqm"/>`,
		"fallback": "material-symbols:filter-list-off-outline-rounded",
	});
}

export default Component;
