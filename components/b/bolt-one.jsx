import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/zow-3zwzb.css';
import '../../css/p/pg_5h5m7z.css';
import '../../css/y/ywu8tfbvo.css';
import '../../css/e/e9m95gfak.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4isBwcig"><g class="s9cl3zbei"><path class="zow-3zwzb"/><path class="pg_5h5m7z"/><path class="ywu8tfbvo"/><path class="e9m95gfak"/></g></mask></defs><path mask="url(#SVG4isBwcig)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bolt-one",
	});
}

export default Component;
