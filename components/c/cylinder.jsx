import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qfm8izowj.css';
import '../../css/y/yhit36cnb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdzsPodEZ"><g class="aql7dnt-u"><path class="qfm8izowj"/><path class="yhit36cnb"/></g></mask></defs><path mask="url(#SVGdzsPodEZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cylinder",
	});
}

export default Component;
