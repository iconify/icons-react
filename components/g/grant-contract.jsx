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

.ofxjttbck {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8 12h7.5m-8 5.5H12m2.875 2.625l.27-.991a1.5 1.5 0 0 1 .387-.666l3.218-3.218a1.414 1.414 0 0 1 2 0a1.414 1.414 0 0 1 0 2l-3.218 3.218a1.5 1.5 0 0 1-.666.387l-.991.27a.814.814 0 0 1-1-1");
}

.xff3g8nhp {
  d: path("M12.212 21.5H7q-.123 0-.245-.012t-.243-.036q-.12-.024-.238-.06t-.231-.082t-.221-.105t-.211-.126q-.102-.069-.197-.146q-.095-.078-.182-.165t-.165-.182t-.146-.197t-.126-.211t-.105-.221q-.047-.114-.082-.231t-.06-.238t-.036-.243T4.5 19V5q0-.123.012-.245t.036-.243q.024-.12.06-.238t.082-.231t.105-.221q.058-.109.126-.211q.069-.102.146-.197q.078-.095.165-.182t.182-.165q.095-.077.197-.146t.211-.126q.108-.058.221-.105q.114-.047.231-.082t.238-.06q.121-.024.243-.036T7 2.5h6.5l6 6v3.515");
}
</style><g class="hntgybcog"><path class="xff3g8nhp"/><path class="ofxjttbck"/></g>`,
		"fallback": "uix:grant-contract",
	});
}

export default Component;
