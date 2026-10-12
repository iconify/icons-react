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
		"content": `<style>.hp7er7voc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.5 21.25l-3.25-5A1.4 1.4 0 0 1 7.5 14.6L8.75 16V6.25a1.5 1.5 0 0 1 3 0v5.25v-7a1.5 1.5 0 0 1 3 0v7v-5.75a1.5 1.5 0 0 1 3 0v5.75v-3.25a1.5 1.5 0 0 1 3 0v6.25c0 3.75-2.5 6.75-6 6.75ZM4.87 4.27l.38.85q.12.27.42.3l.92.1q.3.03.08.24l-.69.62q-.22.2-.16.49l.19.91q.06.29-.2.14l-.8-.46q-.26-.15-.52 0l-.8.46q-.26.15-.2-.14l.19-.91q.06-.29-.16-.49l-.69-.62q-.22-.21.08-.24l.92-.1q.3-.03.42-.3l.38-.85q.12-.27.24 0");
}
</style><path class="hp7er7voc"/>`,
		"fallback": "iconoven:citizenship-oath",
	});
}

export default Component;
