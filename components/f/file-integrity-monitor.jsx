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
		"content": `<style>.du4ypi3-g {
  d: path("M13.012 21.5H6q-.123 0-.245-.012t-.243-.036q-.12-.024-.238-.06t-.231-.082t-.221-.105t-.211-.126q-.102-.069-.197-.146q-.095-.078-.182-.165t-.165-.182t-.146-.197t-.126-.211t-.105-.221q-.047-.114-.082-.231t-.06-.238q-.024-.121-.036-.243T3.5 19V5q0-.123.012-.245t.036-.243q.024-.12.06-.238t.082-.231q.047-.113.105-.221q.058-.109.126-.211q.069-.102.146-.197q.078-.095.165-.182t.182-.165q.095-.077.197-.146t.211-.126q.108-.058.221-.105q.114-.047.231-.082t.238-.06q.121-.024.243-.036T6 2.5h6l6 6v3.715");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t774s-kcr {
  d: path("M12 2.5v4a2 2 0 0 0 2 2h4m-3.75 9.75C15.5 16 16.75 15 18 15s2.5 1 3.75 3.25C20.5 20.5 19.25 21.5 18 21.5s-2.5-1-3.75-3.25m3.75 0h.01");
}
</style><g class="hntgybcog"><path class="du4ypi3-g"/><path class="t774s-kcr"/></g>`,
		"fallback": "uix:file-integrity-monitor",
	});
}

export default Component;
