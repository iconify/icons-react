import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m088jbc1k.css';
import '../../css/o/osy329bko.css';
import '../../css/m/mer5m9bvr.css';
import '../../css/z/zja0krb5y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoWjt7dcv"><g class="s9cl3zbei"><path class="m088jbc1k"/><rect class="osy329bko"/><path class="mer5m9bvr"/><path class="zja0krb5y"/></g></mask></defs><path mask="url(#SVGoWjt7dcv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:copy-link",
	});
}

export default Component;
