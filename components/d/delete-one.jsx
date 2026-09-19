import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/at8s-hboq.css';
import '../../css/n/n7w59tq8z.css';
import '../../css/o/oqgq0dbvn.css';
import '../../css/y/y33sfglch.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnyB0edPP"><g class="s9cl3zbei"><path class="at8s-hboq"/><path class="n7w59tq8z"/><path clip-rule="evenodd" class="oqgq0dbvn"/><path class="y33sfglch"/></g></mask></defs><path mask="url(#SVGnyB0edPP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:delete-one",
	});
}

export default Component;
