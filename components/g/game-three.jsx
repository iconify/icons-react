import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bovotab5v.css';
import '../../css/g/gubyjri1y.css';
import '../../css/q/qfbc1xbpu.css';
import '../../css/c/cvwqdz8ts.css';
import '../../css/s/s5fd5bb-l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLYq4ybGn"><g class="ft5dv1b6b"><path class="bovotab5v"/><rect class="gubyjri1y"/><path class="qfbc1xbpu"/><rect class="cvwqdz8ts"/><rect class="s5fd5bb-l"/></g></mask></defs><path mask="url(#SVGLYq4ybGn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:game-three",
	});
}

export default Component;
