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
		"content": `<style>.qatbe4bpg {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20v-1.9q0-.525.225-.987t.65-.788q1.075-.875 1.938-1.963T8.25 12H7q-.425 0-.712-.288T6 11t.288-.712T7 10h.8l-1-1.65q-.35-.575-.275-1.263T7.1 5.9l4.2-4.2q.3-.3.7-.3t.7.3l4.2 4.2q.5.5.575 1.188T17.2 8.35l-1 1.65h.8q.425 0 .713.288T18 11t-.288.713T17 12h-1.25q.575 1.275 1.438 2.363t1.937 1.962q.4.35.638.8T20 18.1V20q0 .825-.587 1.413T18 22zm6.713-14.288Q13 7.425 13 7t-.288-.712T12 6t-.712.288T11 7t.288.713T12 8t.713-.288");
}
</style><path class="qatbe4bpg"/>`,
		"fallback": "material-symbols:chess-bishop-rounded",
	});
}

export default Component;
