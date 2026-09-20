import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ebyf81b9p {
  cx: 16px;
  cy: 23.3px;
  fill: var(--svg-color--fff, #fff);
  rx: 3.8px;
  ry: 3.9px;
}

.lmh4whbrs {
  cx: 16px;
  cy: 16px;
  r: 14px;
}

.m96ir8bsl {
  cx: 16px;
  cy: 8.7px;
  fill: var(--svg-color--fff, #fff);
  rx: 3.8px;
  ry: 3.9px;
}
</style><circle class="lmh4whbrs"/><ellipse class="m96ir8bsl"/><ellipse class="ebyf81b9p"/>`,
		"fallback": "vscode-icons:file-type-just",
	});
}

export default Component;
