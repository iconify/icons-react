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
		"content": `<style>.j2a3qybop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.523 16.721C7.487 15.436 2.952 10.422 2.5 5q0-.123.012-.245t.036-.243q.024-.12.06-.238t.082-.231q.047-.113.105-.221q.058-.109.126-.211q.069-.102.146-.197q.078-.095.165-.182t.182-.165q.095-.077.197-.146t.211-.126t.221-.105q.114-.047.231-.082t.238-.06q.121-.024.243-.036T5 2.5h2.5L9 6.25l-2 1.5C8 10 10 12 12.25 13l1.5-2l1.039.416M16 15.5a2.25 2.25 0 1 1 3 2c-.5.25-.75.75-.75 1.25m0 2.75h.01");
}
</style><path class="j2a3qybop"/>`,
		"fallback": "uix:discovery-call",
	});
}

export default Component;
