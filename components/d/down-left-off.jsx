import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/e/efper0b_o.css';
import '../../css/l/l87812muk.css';
import '../../css/j/je5vd7bsn.css';
import '../../css/i/i3s9_b4fi.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="efper0b_o"/><path class="l87812muk"/></g><path clip-rule="evenodd" class="je5vd7bsn"/><path clip-rule="evenodd" class="i3s9_b4fi"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:down-left-off",
	});
}

export default Component;
