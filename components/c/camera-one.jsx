import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yez7skblq.css';
import '../../css/z/zh_bpuben.css';
import '../../css/h/h2uo0wbmx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMRzgUPhe"><g class="aql7dnt-u"><circle class="yez7skblq"/><circle class="zh_bpuben"/><path class="h2uo0wbmx"/></g></mask></defs><path mask="url(#SVGMRzgUPhe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:camera-one",
	});
}

export default Component;
