import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p60eapvkt.css';
import '../../css/p/pqzlykbsi.css';
import '../../css/r/r306avbbq.css';
import '../../css/r/r7fu50bys.css';
import '../../css/d/dr9i5ncll.css';
import '../../css/l/lie1g2bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p60eapvkt"/><path class="pqzlykbsi"/><path class="r306avbbq"/><path class="r7fu50bys"/><path class="dr9i5ncll"/><path class="lie1g2bcz"/>`,
		"fallback": "token:dent",
	});
}

export default Component;
