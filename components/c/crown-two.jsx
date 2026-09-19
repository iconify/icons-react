import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/g/geju8gabu.css';
import '../../css/h/hj_ooobll.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1ysxJe8T"><g class="adexpl72i"><path class="geju8gabu"/><path class="hj_ooobll"/></g></mask></defs><path mask="url(#SVG1ysxJe8T)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:crown-two",
	});
}

export default Component;
