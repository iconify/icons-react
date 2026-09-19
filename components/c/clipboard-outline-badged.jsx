import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr0zmjbwj.css';
import '../../css/m/mv5toj86k.css';
import '../../css/u/uodsjd29z.css';
import '../../css/b/bqewl7bjy.css';
import '../../css/m/me3rf7d6x.css';
import '../../css/e/e9vcz5b-g.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged pr0zmjbwj"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged mv5toj86k"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged uodsjd29z"/><path class="bqewl7bjy clr-i-outline--badged clr-i-outline-path-4--badged"/><path class="clr-i-outline--badged clr-i-outline-path-5--badged me3rf7d6x"/><path class="clr-i-outline--badged clr-i-outline-path-6--badged e9vcz5b-g"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-7--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:clipboard-outline-badged",
	});
}

export default Component;
