import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/g/gr941wbsm.css';
import '../../css/s/s1axx0b3q.css';
import '../../css/t/tmslae69u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGr0AUwubg"><g class="hv130ab-t"><path class="gr941wbsm"/><path class="s1axx0b3q"/><path class="tmslae69u"/></g></mask></defs><path mask="url(#SVGr0AUwubg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:communication",
	});
}

export default Component;
