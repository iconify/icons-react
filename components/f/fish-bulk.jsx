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
		"content": `<style>.cd4o98r9f {
  d: path("M12.707 9.293c1.394 1.395 1.394 4.019 0 5.414a.999.999 0 1 1-1.414-1.414c.332-.332.457-.837.457-1.293s-.125-.961-.457-1.293a.999.999 0 1 1 1.414-1.414M8 10h.01a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.gsj76gm_m {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m17.234 8.352l3.059-3.059a1.001 1.001 0 0 1 1.656 1.023L20.054 12l1.895 5.684a1.001 1.001 0 0 1-1.656 1.023l-3.059-3.059C15.878 17.887 13.796 19.999 11 20c-1.92 0-3.662-1.001-5.048-2.26c-1.61-1.465-2.877-3.355-3.846-5.293a1 1 0 0 1 0-.894a21 21 0 0 1 1.755-2.92c1.165-1.612 2.657-3.154 4.481-4.007C9.174 4.236 10.078 4 11 4c2.796.001 4.878 2.113 6.234 4.352");
}
</style><g class="cuyn6tgcc"><path class="gsj76gm_m"/><path class="cd4o98r9f"/></g>`,
		"fallback": "coolicons:fish-bulk",
	});
}

export default Component;
