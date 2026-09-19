import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nsqnp5fhf.css';
import '../../css/v/vimy9t0cn.css';
import '../../css/i/i-tcsr9te.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGq7EWHbwl"><g class="rohhhzb0l"><rect class="nsqnp5fhf"/><circle class="vimy9t0cn"/><path class="i-tcsr9te"/></g></mask></defs><path mask="url(#SVGq7EWHbwl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:control",
	});
}

export default Component;
