import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/agpgk5s6s.css';
import '../../css/f/fkbq2xbja.css';
import '../../css/i/ipyoirb8q.css';
import '../../css/u/ugs80abio.css';
import '../../css/d/d6whv3bpq.css';
import '../../css/b/bnf0w988i.css';
import '../../css/d/dpo7z7bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="agpgk5s6s"/><path class="fkbq2xbja"/><path class="ipyoirb8q"/><path class="ugs80abio"/><path class="d6whv3bpq"/><path class="bnf0w988i"/><path class="dpo7z7bbs"/></g>`,
		"fallback": "solar:cloud-sun-2-line-duotone",
	});
}

export default Component;
