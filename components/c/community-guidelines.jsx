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
		"content": `<style>.akpixpbam {
  d: path("M4.5 19q0-.123.012-.245t.036-.243t.06-.238t.082-.231q.047-.113.105-.221q.058-.109.126-.211q.069-.102.146-.197q.078-.095.165-.182t.182-.165t.197-.146t.211-.126q.108-.058.221-.105q.114-.047.231-.082t.238-.06t.243-.036T7 16.5h4.673M8.5 7H16m-7.5 4h5m1 5.25A1.25 1.25 0 0 1 15.75 15h4.5a1.25 1.25 0 0 1 1.25 1.25v2.5A1.25 1.25 0 0 1 20.25 20H17.5l-1.75 1.5V20a1.25 1.25 0 0 1-1.25-1.25Z");
}

.iluwmccyn {
  d: path("M12.527 21.5H7q-.123 0-.245-.012t-.243-.036q-.12-.024-.238-.06t-.231-.082t-.221-.105t-.211-.126q-.102-.069-.197-.146q-.095-.078-.182-.165t-.165-.182t-.146-.197t-.126-.211t-.105-.221q-.047-.114-.082-.231t-.06-.238t-.036-.243T4.5 19V5q0-.123.012-.245t.036-.243q.024-.12.06-.238t.082-.231t.105-.221q.058-.109.126-.211q.069-.102.146-.197q.078-.095.165-.182t.182-.165q.095-.077.197-.146t.211-.126q.108-.058.221-.105q.114-.047.231-.082t.238-.06q.121-.024.243-.036T7 2.5h12.5v9.673");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iluwmccyn"/><path class="akpixpbam"/></g>`,
		"fallback": "uix-sharp:community-guidelines",
	});
}

export default Component;
