import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/scnf1b84q.css';
import '../../css/r/rdtq9xb-o.css';
import '../../css/e/ecnlh9tzj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3wR1bd4e"><g class="rohhhzb0l"><path class="scnf1b84q"/><path class="rdtq9xb-o"/><path class="ecnlh9tzj"/></g></mask></defs><path mask="url(#SVG3wR1bd4e)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:incoming",
	});
}

export default Component;
