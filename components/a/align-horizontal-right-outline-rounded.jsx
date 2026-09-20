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
		"content": `<style>.ayjjfcbkw {
  fill: currentColor;
  d: path("M20.288 21.713Q20 21.425 20 21V3q0-.425.288-.712T21 2t.713.288T22 3v18q0 .425-.288.713T21 22t-.712-.288M9.5 17q-.625 0-1.062-.437T8 15.5t.438-1.062T9.5 14h7q.625 0 1.063.438T18 15.5t-.437 1.063T16.5 17zm-6-7q-.625 0-1.062-.437T2 8.5t.438-1.062T3.5 7h13q.625 0 1.063.438T18 8.5t-.437 1.063T16.5 10z");
}
</style><path class="ayjjfcbkw"/>`,
		"fallback": "material-symbols:align-horizontal-right-outline-rounded",
	});
}

export default Component;
