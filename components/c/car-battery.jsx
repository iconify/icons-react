import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qblb5vb-h.css';
import '../../css/k/ksfo9sa3u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhgbF1H4Z"><g class="aql7dnt-u"><path class="qblb5vb-h"/><path class="ksfo9sa3u"/></g></mask></defs><path mask="url(#SVGhgbF1H4Z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:car-battery",
	});
}

export default Component;
