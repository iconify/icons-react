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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.inhqdfb3s {
  d: path("M9 15.75L7.5 21.5l2.5-1l1-4m4-.75l1.5 5.75l-2.5-1l-1-4m-.625-9.375l.068.203a1.5 1.5 0 0 0 1.274 1.019l.289.029a.487.487 0 0 1 .244.874l-.135.101a1.5 1.5 0 0 0-.523 1.675l.035.105a.424.424 0 0 1-.627.494l-.205-.128a1.5 1.5 0 0 0-1.59 0l-.205.128a.424.424 0 0 1-.627-.494l.035-.105a1.5 1.5 0 0 0-.523-1.675L9.75 9.25a.487.487 0 0 1 .244-.874l.289-.029a1.5 1.5 0 0 0 1.274-1.019l.068-.203a.395.395 0 0 1 .75 0");
}

.trxlteb6d {
  d: path("M5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="trxlteb6d"/><path class="inhqdfb3s"/></g>`,
		"fallback": "uix:achievement-badge",
	});
}

export default Component;
