import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tmyoqfybt.css';
import '../../css/y/yhmi8kb2o.css';
import '../../css/v/vvnoc_b4o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlt4VBnfA"><g class="aql7dnt-u"><path class="tmyoqfybt"/><path class="yhmi8kb2o"/><path class="vvnoc_b4o"/></g></mask></defs><path mask="url(#SVGlt4VBnfA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:badge-two",
	});
}

export default Component;
