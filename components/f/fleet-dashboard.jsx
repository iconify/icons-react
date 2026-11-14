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
		"content": `<style>.q-aowxb7a {
  d: path("M5.25 9.5L6 5.75h6.5l.75 3.75ZM16 21.5v-3m2.75 3v-6m2.75 6v-4");
}

.tnq-vvlnc {
  d: path("M15.954 14.5H2.5v-9q0-.123.012-.245t.036-.243q.024-.12.06-.238t.082-.231q.047-.113.105-.221q.058-.109.126-.211q.069-.102.146-.197q.078-.095.165-.182t.182-.165q.095-.077.197-.146t.211-.126t.221-.105q.114-.047.231-.082t.238-.06q.121-.024.243-.036T5 3h8.5q.123 0 .245.012t.243.036q.12.024.238.06t.231.082q.113.047.221.105q.109.058.211.126q.102.069.197.146q.095.078.182.165t.165.182t.146.197t.126.211q.058.108.105.221q.047.114.082.231t.06.238q.024.121.036.243T16 5.5v7.246M5.5 14.5v3m7.5-3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tnq-vvlnc"/><path class="q-aowxb7a"/></g>`,
		"fallback": "uix-sharp:fleet-dashboard",
	});
}

export default Component;
