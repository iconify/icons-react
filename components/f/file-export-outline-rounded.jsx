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
		"content": `<style>.unqv__m4r {
  fill: currentColor;
  d: path("m8 19.425l-2.25 2.25q-.3.3-.7.288t-.7-.313q-.275-.3-.287-.7t.287-.7L6.6 18H5.35q-.425 0-.712-.287T4.35 17t.288-.712T5.35 16H9q.425 0 .713.288T10 17v3.65q0 .425-.288.713T9 21.65t-.712-.287T8 20.65zm-3.712-5.712Q4 13.425 4 13V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22h-5q-.425 0-.712-.288T12 21t.288-.712T13 20h5V9h-4q-.425 0-.712-.288T13 8V4H6v9q0 .425-.288.713T5 14t-.712-.288");
}
</style><path class="unqv__m4r"/>`,
		"fallback": "material-symbols:file-export-outline-rounded",
	});
}

export default Component;
