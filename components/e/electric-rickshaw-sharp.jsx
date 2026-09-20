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
		"content": `<style>.a3xlh1b3v {
  fill: currentColor;
  d: path("M6 17q-.975 0-1.737-.562T3.2 15H1V3h15.025L21 9v2.15q.875.3 1.438 1.088T23 14q0 1.25-.875 2.125T20 17q-.975 0-1.763-.562T17.15 15h-8.3q-.35.875-1.112 1.438T6 17M3 8h4V5H3zm6 5h5V5H9v3h3v2H9zm7-4h2.4L16 6.1zm-9.287 5.713Q7 14.425 7 14t-.288-.712T6 13t-.712.288T5 14t.288.713T6 15t.713-.288m14 0Q21 14.426 21 14t-.288-.712T20 13t-.712.288T19 14t.288.713T20 15t.713-.288M13 23l-6-3h4v-2l6 3h-4z");
}
</style><path class="a3xlh1b3v"/>`,
		"fallback": "material-symbols:electric-rickshaw-sharp",
	});
}

export default Component;
