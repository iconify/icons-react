import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o5xmpjbwx {
  d: path("m12.68 3.34l.65.58l.68.59l.88-.17l.85-.17l.89-.18l.28.85l.28.83l.29.85l.85.29l.83.28l.85.29l-.18.88l-.17.85l-.17.88l.59.68l.58.65l.59.68l-.59.68l-.58.65l-.59.68l.17.88l.17.85l.18.89l-.85.28l-.83.28l-.85.29l-.29.85l-.28.83l-.28.85l-.89-.18l-.85-.17l-.88-.17l-.68.59l-.65.58l-.68.59l-.68-.59l-.65-.58l-.68-.59l-.88.17l-.85.17l-.88.18l-.29-.85l-.28-.83l-.29-.85l-.85-.29l-.83-.28l-.85-.28l.18-.89l.17-.85l.17-.88l-.59-.68l-.58-.65l-.59-.68l.59-.68l.58-.65l.59-.68l-.17-.88l-.17-.85l-.18-.89l.85-.28l.83-.28l.85-.29l.29-.85l.28-.83l.28-.85l.89.18l.85.17l.88.17l.68-.59l.65-.58l.68-.59z");
}

.rd4brpxxm {
  d: path("M8.5 15.5c.25-4 2.25-6.25 7-7c-.25 4-2.25 6.25-7 7Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="o5xmpjbwx"/><path class="rd4brpxxm"/></g>`,
		"fallback": "iconoven:eco-certified-sharp",
	});
}

export default Component;
