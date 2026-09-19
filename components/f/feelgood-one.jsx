import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/k/klj7_u49t.css';
import '../../css/t/twobkzb1l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKFPPPdik"><g class="wwvp95byt"><path class="klj7_u49t"/><path class="twobkzb1l"/></g></mask></defs><path mask="url(#SVGKFPPPdik)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:feelgood-one",
	});
}

export default Component;
